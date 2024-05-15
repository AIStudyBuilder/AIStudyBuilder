import { credentials, type ServiceError } from '@grpc/grpc-js';

import { UserServiceClient } from '@/proto/getuser/getuser_grpc_pb';
import {
  type GenerateReferalLinkResponse,
  type UserResponse,
  GenerateReferalLinkRequest,
  GetUserRequest,
  Language,
  Level,
  NextRequest,
  SendAnswerRequest,
  SendDialogMsgIdRequest,
  SendDialogRequest,
  UpdateButtonsRequest,
  UpdateUserRequest,
  UpdateMessageIdForForceUpdateRequest,
} from '@/proto/getuser/getuser_pb';

import { CONFIG } from '@/config';

export class GrpcUserService {
  private client = new UserServiceClient(`${CONFIG.SERVER_URL}:${CONFIG.GRPC_PORT}`, credentials.createInsecure());

  getUser(id: number): Promise<UserResponse | ServiceError> {
    const getUserRequest = new GetUserRequest();

    getUserRequest.setTelegramid(`${id}`);

    return new Promise((resolve, reject) => {
      try {
        this.client.getUser(getUserRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  updateUser(id: number, name: string, referal: string | undefined): Promise<UserResponse | ServiceError> {
    const updateUserRequest = new UpdateUserRequest();

    updateUserRequest.setTelegramId(`${id}`);
    updateUserRequest.setName(name);
    updateUserRequest.setLevel(Level.A2);
    updateUserRequest.setLanguage(Language.UNKNOWN_LANGUAGE);

    if (referal) {
      updateUserRequest.setReftelegramid(referal);
    }

    return new Promise((resolve, reject) => {
      try {
        this.client.updateUser(updateUserRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  next(id: number): Promise<UserResponse | ServiceError> {
    const nextRequest = new NextRequest();

    nextRequest.setTelegramid(`${id}`);

    return new Promise((resolve, reject) => {
      try {
        this.client.next(nextRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  sendDialog(id: number, message: string, voiceFileUrl?: string): Promise<UserResponse | ServiceError> {
    const sendDialogRequest = new SendDialogRequest();

    sendDialogRequest.setTelegramid(`${id}`);
    sendDialogRequest.setUserreply(message);

    if (voiceFileUrl) sendDialogRequest.setVoicefileurl(voiceFileUrl);

    return new Promise((resolve, reject) => {
      try {
        this.client.sendDialog(sendDialogRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  sendAnswer(id: number, message: string): Promise<UserResponse | ServiceError> {
    const sendAnswerRequest = new SendAnswerRequest();

    sendAnswerRequest.setTelegramId(`${id}`);
    sendAnswerRequest.setUserReply(message);

    return new Promise((resolve, reject) => {
      try {
        this.client.sendAnswer(sendAnswerRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  updateButtons(id: number, messages: number[], toDelete = false): Promise<UserResponse | ServiceError> {
    const updateButtonsToUpdateRequest = new UpdateButtonsRequest();

    updateButtonsToUpdateRequest.setTelegramId(`${id}`);
    updateButtonsToUpdateRequest.setButtonsList(messages);

    return new Promise((resolve, reject) => {
      try {
        this.client[toDelete ? 'updateMsgToDelete' : 'updateMsgToUpdate'](
          updateButtonsToUpdateRequest,
          (error, response) => {
            resolve(error || response);
          },
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  addButton(id: number, messages: number[], toDelete = false): Promise<UserResponse | ServiceError> {
    const updateButtonsToDeleteRequest = new UpdateButtonsRequest();

    updateButtonsToDeleteRequest.setTelegramId(`${id}`);
    updateButtonsToDeleteRequest.setButtonsList(messages);

    return new Promise((resolve, reject) => {
      try {
        this.client[toDelete ? 'addMsgToDelete' : 'addMsgToUpdate'](updateButtonsToDeleteRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  generateReferralLink(id: number): Promise<GenerateReferalLinkResponse | ServiceError> {
    const generateReferralLinkRequest = new GenerateReferalLinkRequest();

    generateReferralLinkRequest.setTelegramId(`${id}`);

    return new Promise((resolve, reject) => {
      try {
        this.client.generateReferalLink(generateReferralLinkRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  sendDialogMsgId(id: number, messageId: number): Promise<UserResponse | ServiceError> {
    const sendDialogMsgIdRequest = new SendDialogMsgIdRequest();

    sendDialogMsgIdRequest.setTelegramid(`${id}`);
    sendDialogMsgIdRequest.setAnswermsgid(`${messageId}`);

    return new Promise((resolve, reject) => {
      try {
        this.client.sendDialogMsgId(sendDialogMsgIdRequest, (error, response) => {
          resolve(error || response);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  updateMsgIdForForceUpd(id: number, messageId: number): Promise<undefined | ServiceError> {
    const updateMessageIdForForceUpdateRequest = new UpdateMessageIdForForceUpdateRequest();

    updateMessageIdForForceUpdateRequest.setTelegramId(`${id}`);
    updateMessageIdForForceUpdateRequest.setMessageId(`${messageId}`);

    return new Promise((resolve, reject) => {
      try {
        this.client.updateMessageIdForForceUpdate(updateMessageIdForForceUpdateRequest, (error) => {
          resolve(error || undefined);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
