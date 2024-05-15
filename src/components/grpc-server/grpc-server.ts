import { Server, ServerCredentials } from '@grpc/grpc-js';

import { CONFIG } from '@/config';
import { ChatServiceService, PointServiceService } from '@/proto/getuser/getuser_grpc_pb';
import { ChatServiceServer } from '@/services/chat-service-server';
import { PointServiceServer } from '@/services/point-service-server';

export const startGrpcServer = () => {
  const server = new Server();

  server.addService(ChatServiceService, new ChatServiceServer());
  server.addService(PointServiceService, new PointServiceServer());

  const uri = `${CONFIG.GRPC_SERVER_HOST}:${CONFIG.GRPC_SERVER_PORT}`;

  server.bindAsync(uri, ServerCredentials.createInsecure(), (err, port) => {
    if (err) throw err;
    console.log(`GRPC Server is running on ${CONFIG.GRPC_SERVER_HOST}:${port}`);
  });
};
