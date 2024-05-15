import type { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';

import type { IPointServiceServer } from '@/proto/getuser/getuser_grpc_pb';
import { GeneralResponse, type SendPointsRequest } from '@/proto/getuser/getuser_pb';
import { bot } from '@/components/bot';

export class PointServiceServer implements IPointServiceServer {
  [name: string]: UntypedHandleCall;

  async sendPoints(
    call: ServerUnaryCall<SendPointsRequest, GeneralResponse>,
    callback: sendUnaryData<GeneralResponse>,
  ): Promise<void> {
    const { telegramid, points } = call.request.toObject();

    const sendMessage = async (message: string) => {
      await bot.sendMessage(telegramid, message, {
        parse_mode: 'HTML',
      });
    };

    const response = new GeneralResponse();

    try {
      if (!points) {
        await sendMessage('\u{1F61E}');
        await sendMessage('Вы не выиграли поинты. В следующий раз повезет!');
      } else {
        await sendMessage('\u{1F45B}');
        await sendMessage(`Вы выиграли <b>${points}</b> поинтов`);
      }

      response.setResult('sendPoints: OK');
    } catch (error) {
      console.error(error);
      response.setResult('sendPoints: ERROR');
    } finally {
      callback(null, response);
    }
  }
}
