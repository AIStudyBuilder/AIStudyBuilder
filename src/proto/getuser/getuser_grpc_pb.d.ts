// package: protobuff
// file: getuser.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as getuser_pb from "./getuser_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
    sendDialog: IUserServiceService_ISendDialog;
    sendDialogMsgId: IUserServiceService_ISendDialogMsgId;
    nextLesson: IUserServiceService_INextLesson;
    nextSession: IUserServiceService_INextSession;
    next: IUserServiceService_INext;
    sendAnswer: IUserServiceService_ISendAnswer;
    updateMsgToDelete: IUserServiceService_IUpdateMsgToDelete;
    addMsgToDelete: IUserServiceService_IAddMsgToDelete;
    updateMsgToUpdate: IUserServiceService_IUpdateMsgToUpdate;
    addMsgToUpdate: IUserServiceService_IAddMsgToUpdate;
    updateUser: IUserServiceService_IUpdateUser;
    generateReferalLink: IUserServiceService_IGenerateReferalLink;
    updateMessageIdForForceUpdate: IUserServiceService_IUpdateMessageIdForForceUpdate;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<getuser_pb.GetUserRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_ISendDialog extends grpc.MethodDefinition<getuser_pb.SendDialogRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/SendDialog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.SendDialogRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.SendDialogRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_ISendDialogMsgId extends grpc.MethodDefinition<getuser_pb.SendDialogMsgIdRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/SendDialogMsgId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.SendDialogMsgIdRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.SendDialogMsgIdRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_INextLesson extends grpc.MethodDefinition<getuser_pb.NextLessonRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/NextLesson";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.NextLessonRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.NextLessonRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_INextSession extends grpc.MethodDefinition<getuser_pb.NextSessionRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/NextSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.NextSessionRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.NextSessionRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_INext extends grpc.MethodDefinition<getuser_pb.NextRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/Next";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.NextRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.NextRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_ISendAnswer extends grpc.MethodDefinition<getuser_pb.SendAnswerRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/SendAnswer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.SendAnswerRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.SendAnswerRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IUpdateMsgToDelete extends grpc.MethodDefinition<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/UpdateMsgToDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateButtonsRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateButtonsRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IAddMsgToDelete extends grpc.MethodDefinition<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/AddMsgToDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateButtonsRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateButtonsRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IUpdateMsgToUpdate extends grpc.MethodDefinition<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/UpdateMsgToUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateButtonsRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateButtonsRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IAddMsgToUpdate extends grpc.MethodDefinition<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/AddMsgToUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateButtonsRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateButtonsRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<getuser_pb.UpdateUserRequest, getuser_pb.UserResponse> {
    path: "/protobuff.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<getuser_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.UserResponse>;
}
interface IUserServiceService_IGenerateReferalLink extends grpc.MethodDefinition<getuser_pb.GenerateReferalLinkRequest, getuser_pb.GenerateReferalLinkResponse> {
    path: "/protobuff.UserService/GenerateReferalLink";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.GenerateReferalLinkRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.GenerateReferalLinkRequest>;
    responseSerialize: grpc.serialize<getuser_pb.GenerateReferalLinkResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.GenerateReferalLinkResponse>;
}
interface IUserServiceService_IUpdateMessageIdForForceUpdate extends grpc.MethodDefinition<getuser_pb.UpdateMessageIdForForceUpdateRequest, getuser_pb.GeneralResponse> {
    path: "/protobuff.UserService/UpdateMessageIdForForceUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.UpdateMessageIdForForceUpdateRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.UpdateMessageIdForForceUpdateRequest>;
    responseSerialize: grpc.serialize<getuser_pb.GeneralResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.GeneralResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<getuser_pb.GetUserRequest, getuser_pb.UserResponse>;
    sendDialog: grpc.handleUnaryCall<getuser_pb.SendDialogRequest, getuser_pb.UserResponse>;
    sendDialogMsgId: grpc.handleUnaryCall<getuser_pb.SendDialogMsgIdRequest, getuser_pb.UserResponse>;
    nextLesson: grpc.handleUnaryCall<getuser_pb.NextLessonRequest, getuser_pb.UserResponse>;
    nextSession: grpc.handleUnaryCall<getuser_pb.NextSessionRequest, getuser_pb.UserResponse>;
    next: grpc.handleUnaryCall<getuser_pb.NextRequest, getuser_pb.UserResponse>;
    sendAnswer: grpc.handleUnaryCall<getuser_pb.SendAnswerRequest, getuser_pb.UserResponse>;
    updateMsgToDelete: grpc.handleUnaryCall<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse>;
    addMsgToDelete: grpc.handleUnaryCall<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse>;
    updateMsgToUpdate: grpc.handleUnaryCall<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse>;
    addMsgToUpdate: grpc.handleUnaryCall<getuser_pb.UpdateButtonsRequest, getuser_pb.UserResponse>;
    updateUser: grpc.handleUnaryCall<getuser_pb.UpdateUserRequest, getuser_pb.UserResponse>;
    generateReferalLink: grpc.handleUnaryCall<getuser_pb.GenerateReferalLinkRequest, getuser_pb.GenerateReferalLinkResponse>;
    updateMessageIdForForceUpdate: grpc.handleUnaryCall<getuser_pb.UpdateMessageIdForForceUpdateRequest, getuser_pb.GeneralResponse>;
}

export interface IUserServiceClient {
    getUser(request: getuser_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: getuser_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: getuser_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialog(request: getuser_pb.SendDialogRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialog(request: getuser_pb.SendDialogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialog(request: getuser_pb.SendDialogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextLesson(request: getuser_pb.NextLessonRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextLesson(request: getuser_pb.NextLessonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextLesson(request: getuser_pb.NextLessonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextSession(request: getuser_pb.NextSessionRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextSession(request: getuser_pb.NextSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    nextSession(request: getuser_pb.NextSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    next(request: getuser_pb.NextRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    next(request: getuser_pb.NextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    next(request: getuser_pb.NextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendAnswer(request: getuser_pb.SendAnswerRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendAnswer(request: getuser_pb.SendAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    sendAnswer(request: getuser_pb.SendAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: getuser_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: getuser_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: getuser_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: getuser_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: getuser_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: getuser_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialog(request: getuser_pb.SendDialogRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialog(request: getuser_pb.SendDialogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialog(request: getuser_pb.SendDialogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendDialogMsgId(request: getuser_pb.SendDialogMsgIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextLesson(request: getuser_pb.NextLessonRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextLesson(request: getuser_pb.NextLessonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextLesson(request: getuser_pb.NextLessonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextSession(request: getuser_pb.NextSessionRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextSession(request: getuser_pb.NextSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public nextSession(request: getuser_pb.NextSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public next(request: getuser_pb.NextRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public next(request: getuser_pb.NextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public next(request: getuser_pb.NextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendAnswer(request: getuser_pb.SendAnswerRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendAnswer(request: getuser_pb.SendAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public sendAnswer(request: getuser_pb.SendAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToDelete(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addMsgToUpdate(request: getuser_pb.UpdateButtonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: getuser_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: getuser_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: getuser_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    public generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    public generateReferalLink(request: getuser_pb.GenerateReferalLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GenerateReferalLinkResponse) => void): grpc.ClientUnaryCall;
    public updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public updateMessageIdForForceUpdate(request: getuser_pb.UpdateMessageIdForForceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    nextContent: IChatServiceService_INextContent;
    dialogReply: IChatServiceService_IDialogReply;
}

interface IChatServiceService_INextContent extends grpc.MethodDefinition<getuser_pb.NextContentRequest, getuser_pb.GeneralResponse> {
    path: "/protobuff.ChatService/NextContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.NextContentRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.NextContentRequest>;
    responseSerialize: grpc.serialize<getuser_pb.GeneralResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.GeneralResponse>;
}
interface IChatServiceService_IDialogReply extends grpc.MethodDefinition<getuser_pb.DialogMessageRequest, getuser_pb.GeneralResponse> {
    path: "/protobuff.ChatService/DialogReply";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.DialogMessageRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.DialogMessageRequest>;
    responseSerialize: grpc.serialize<getuser_pb.GeneralResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.GeneralResponse>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer extends grpc.UntypedServiceImplementation {
    nextContent: grpc.handleUnaryCall<getuser_pb.NextContentRequest, getuser_pb.GeneralResponse>;
    dialogReply: grpc.handleUnaryCall<getuser_pb.DialogMessageRequest, getuser_pb.GeneralResponse>;
}

export interface IChatServiceClient {
    nextContent(request: getuser_pb.NextContentRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    nextContent(request: getuser_pb.NextContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    nextContent(request: getuser_pb.NextContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    dialogReply(request: getuser_pb.DialogMessageRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    dialogReply(request: getuser_pb.DialogMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    dialogReply(request: getuser_pb.DialogMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public nextContent(request: getuser_pb.NextContentRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public nextContent(request: getuser_pb.NextContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public nextContent(request: getuser_pb.NextContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public dialogReply(request: getuser_pb.DialogMessageRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public dialogReply(request: getuser_pb.DialogMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public dialogReply(request: getuser_pb.DialogMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}

interface IPointServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendPoints: IPointServiceService_ISendPoints;
}

interface IPointServiceService_ISendPoints extends grpc.MethodDefinition<getuser_pb.SendPointsRequest, getuser_pb.GeneralResponse> {
    path: "/protobuff.PointService/SendPoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<getuser_pb.SendPointsRequest>;
    requestDeserialize: grpc.deserialize<getuser_pb.SendPointsRequest>;
    responseSerialize: grpc.serialize<getuser_pb.GeneralResponse>;
    responseDeserialize: grpc.deserialize<getuser_pb.GeneralResponse>;
}

export const PointServiceService: IPointServiceService;

export interface IPointServiceServer extends grpc.UntypedServiceImplementation {
    sendPoints: grpc.handleUnaryCall<getuser_pb.SendPointsRequest, getuser_pb.GeneralResponse>;
}

export interface IPointServiceClient {
    sendPoints(request: getuser_pb.SendPointsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    sendPoints(request: getuser_pb.SendPointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    sendPoints(request: getuser_pb.SendPointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}

export class PointServiceClient extends grpc.Client implements IPointServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendPoints(request: getuser_pb.SendPointsRequest, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public sendPoints(request: getuser_pb.SendPointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
    public sendPoints(request: getuser_pb.SendPointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: getuser_pb.GeneralResponse) => void): grpc.ClientUnaryCall;
}
