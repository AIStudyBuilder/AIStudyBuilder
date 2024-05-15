// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var getuser_pb = require('./getuser_pb.js');

function serialize_protobuff_DialogMessageRequest(arg) {
  if (!(arg instanceof getuser_pb.DialogMessageRequest)) {
    throw new Error('Expected argument of type protobuff.DialogMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_DialogMessageRequest(buffer_arg) {
  return getuser_pb.DialogMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_GeneralResponse(arg) {
  if (!(arg instanceof getuser_pb.GeneralResponse)) {
    throw new Error('Expected argument of type protobuff.GeneralResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GeneralResponse(buffer_arg) {
  return getuser_pb.GeneralResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_GenerateReferalLinkRequest(arg) {
  if (!(arg instanceof getuser_pb.GenerateReferalLinkRequest)) {
    throw new Error('Expected argument of type protobuff.GenerateReferalLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GenerateReferalLinkRequest(buffer_arg) {
  return getuser_pb.GenerateReferalLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_GenerateReferalLinkResponse(arg) {
  if (!(arg instanceof getuser_pb.GenerateReferalLinkResponse)) {
    throw new Error('Expected argument of type protobuff.GenerateReferalLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GenerateReferalLinkResponse(buffer_arg) {
  return getuser_pb.GenerateReferalLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_GetUserRequest(arg) {
  if (!(arg instanceof getuser_pb.GetUserRequest)) {
    throw new Error('Expected argument of type protobuff.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GetUserRequest(buffer_arg) {
  return getuser_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_NextContentRequest(arg) {
  if (!(arg instanceof getuser_pb.NextContentRequest)) {
    throw new Error('Expected argument of type protobuff.NextContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_NextContentRequest(buffer_arg) {
  return getuser_pb.NextContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_NextLessonRequest(arg) {
  if (!(arg instanceof getuser_pb.NextLessonRequest)) {
    throw new Error('Expected argument of type protobuff.NextLessonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_NextLessonRequest(buffer_arg) {
  return getuser_pb.NextLessonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_NextRequest(arg) {
  if (!(arg instanceof getuser_pb.NextRequest)) {
    throw new Error('Expected argument of type protobuff.NextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_NextRequest(buffer_arg) {
  return getuser_pb.NextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_NextSessionRequest(arg) {
  if (!(arg instanceof getuser_pb.NextSessionRequest)) {
    throw new Error('Expected argument of type protobuff.NextSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_NextSessionRequest(buffer_arg) {
  return getuser_pb.NextSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_SendAnswerRequest(arg) {
  if (!(arg instanceof getuser_pb.SendAnswerRequest)) {
    throw new Error('Expected argument of type protobuff.SendAnswerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_SendAnswerRequest(buffer_arg) {
  return getuser_pb.SendAnswerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_SendDialogMsgIdRequest(arg) {
  if (!(arg instanceof getuser_pb.SendDialogMsgIdRequest)) {
    throw new Error('Expected argument of type protobuff.SendDialogMsgIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_SendDialogMsgIdRequest(buffer_arg) {
  return getuser_pb.SendDialogMsgIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_SendDialogRequest(arg) {
  if (!(arg instanceof getuser_pb.SendDialogRequest)) {
    throw new Error('Expected argument of type protobuff.SendDialogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_SendDialogRequest(buffer_arg) {
  return getuser_pb.SendDialogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_SendPointsRequest(arg) {
  if (!(arg instanceof getuser_pb.SendPointsRequest)) {
    throw new Error('Expected argument of type protobuff.SendPointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_SendPointsRequest(buffer_arg) {
  return getuser_pb.SendPointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_UpdateButtonsRequest(arg) {
  if (!(arg instanceof getuser_pb.UpdateButtonsRequest)) {
    throw new Error('Expected argument of type protobuff.UpdateButtonsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_UpdateButtonsRequest(buffer_arg) {
  return getuser_pb.UpdateButtonsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_UpdateMessageIdForForceUpdateRequest(arg) {
  if (!(arg instanceof getuser_pb.UpdateMessageIdForForceUpdateRequest)) {
    throw new Error('Expected argument of type protobuff.UpdateMessageIdForForceUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_UpdateMessageIdForForceUpdateRequest(buffer_arg) {
  return getuser_pb.UpdateMessageIdForForceUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_UpdateUserRequest(arg) {
  if (!(arg instanceof getuser_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type protobuff.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_UpdateUserRequest(buffer_arg) {
  return getuser_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_UserResponse(arg) {
  if (!(arg instanceof getuser_pb.UserResponse)) {
    throw new Error('Expected argument of type protobuff.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_UserResponse(buffer_arg) {
  return getuser_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/protobuff.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.GetUserRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_GetUserRequest,
    requestDeserialize: deserialize_protobuff_GetUserRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  sendDialog: {
    path: '/protobuff.UserService/SendDialog',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.SendDialogRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_SendDialogRequest,
    requestDeserialize: deserialize_protobuff_SendDialogRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  sendDialogMsgId: {
    path: '/protobuff.UserService/SendDialogMsgId',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.SendDialogMsgIdRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_SendDialogMsgIdRequest,
    requestDeserialize: deserialize_protobuff_SendDialogMsgIdRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  nextLesson: {
    path: '/protobuff.UserService/NextLesson',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.NextLessonRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_NextLessonRequest,
    requestDeserialize: deserialize_protobuff_NextLessonRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  nextSession: {
    path: '/protobuff.UserService/NextSession',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.NextSessionRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_NextSessionRequest,
    requestDeserialize: deserialize_protobuff_NextSessionRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  next: {
    path: '/protobuff.UserService/Next',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.NextRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_NextRequest,
    requestDeserialize: deserialize_protobuff_NextRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  sendAnswer: {
    path: '/protobuff.UserService/SendAnswer',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.SendAnswerRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_SendAnswerRequest,
    requestDeserialize: deserialize_protobuff_SendAnswerRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  updateMsgToDelete: {
    path: '/protobuff.UserService/UpdateMsgToDelete',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateButtonsRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_UpdateButtonsRequest,
    requestDeserialize: deserialize_protobuff_UpdateButtonsRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  addMsgToDelete: {
    path: '/protobuff.UserService/AddMsgToDelete',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateButtonsRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_UpdateButtonsRequest,
    requestDeserialize: deserialize_protobuff_UpdateButtonsRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  updateMsgToUpdate: {
    path: '/protobuff.UserService/UpdateMsgToUpdate',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateButtonsRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_UpdateButtonsRequest,
    requestDeserialize: deserialize_protobuff_UpdateButtonsRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  addMsgToUpdate: {
    path: '/protobuff.UserService/AddMsgToUpdate',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateButtonsRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_UpdateButtonsRequest,
    requestDeserialize: deserialize_protobuff_UpdateButtonsRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  updateUser: {
    path: '/protobuff.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateUserRequest,
    responseType: getuser_pb.UserResponse,
    requestSerialize: serialize_protobuff_UpdateUserRequest,
    requestDeserialize: deserialize_protobuff_UpdateUserRequest,
    responseSerialize: serialize_protobuff_UserResponse,
    responseDeserialize: deserialize_protobuff_UserResponse,
  },
  generateReferalLink: {
    path: '/protobuff.UserService/GenerateReferalLink',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.GenerateReferalLinkRequest,
    responseType: getuser_pb.GenerateReferalLinkResponse,
    requestSerialize: serialize_protobuff_GenerateReferalLinkRequest,
    requestDeserialize: deserialize_protobuff_GenerateReferalLinkRequest,
    responseSerialize: serialize_protobuff_GenerateReferalLinkResponse,
    responseDeserialize: deserialize_protobuff_GenerateReferalLinkResponse,
  },
  updateMessageIdForForceUpdate: {
    path: '/protobuff.UserService/UpdateMessageIdForForceUpdate',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.UpdateMessageIdForForceUpdateRequest,
    responseType: getuser_pb.GeneralResponse,
    requestSerialize: serialize_protobuff_UpdateMessageIdForForceUpdateRequest,
    requestDeserialize: deserialize_protobuff_UpdateMessageIdForForceUpdateRequest,
    responseSerialize: serialize_protobuff_GeneralResponse,
    responseDeserialize: deserialize_protobuff_GeneralResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
var ChatServiceService = exports.ChatServiceService = {
  nextContent: {
    path: '/protobuff.ChatService/NextContent',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.NextContentRequest,
    responseType: getuser_pb.GeneralResponse,
    requestSerialize: serialize_protobuff_NextContentRequest,
    requestDeserialize: deserialize_protobuff_NextContentRequest,
    responseSerialize: serialize_protobuff_GeneralResponse,
    responseDeserialize: deserialize_protobuff_GeneralResponse,
  },
  dialogReply: {
    path: '/protobuff.ChatService/DialogReply',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.DialogMessageRequest,
    responseType: getuser_pb.GeneralResponse,
    requestSerialize: serialize_protobuff_DialogMessageRequest,
    requestDeserialize: deserialize_protobuff_DialogMessageRequest,
    responseSerialize: serialize_protobuff_GeneralResponse,
    responseDeserialize: deserialize_protobuff_GeneralResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
var PointServiceService = exports.PointServiceService = {
  sendPoints: {
    path: '/protobuff.PointService/SendPoints',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.SendPointsRequest,
    responseType: getuser_pb.GeneralResponse,
    requestSerialize: serialize_protobuff_SendPointsRequest,
    requestDeserialize: deserialize_protobuff_SendPointsRequest,
    responseSerialize: serialize_protobuff_GeneralResponse,
    responseDeserialize: deserialize_protobuff_GeneralResponse,
  },
};

exports.PointServiceClient = grpc.makeGenericClientConstructor(PointServiceService);
