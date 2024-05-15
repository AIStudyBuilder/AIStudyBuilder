// package: protobuff
// file: getuser.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Content extends jspb.Message { 
    getName(): string;
    setName(value: string): Content;
    getType(): ContentType;
    setType(value: ContentType): Content;
    getText(): string;
    setText(value: string): Content;
    getTextimgurl(): string;
    setTextimgurl(value: string): Content;
    getVideo(): string;
    setVideo(value: string): Content;
    getAudio(): string;
    setAudio(value: string): Content;
    getId(): string;
    setId(value: string): Content;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
    export type AsObject = {
        name: string,
        type: ContentType,
        text: string,
        textimgurl: string,
        video: string,
        audio: string,
        id: string,
    }
}

export class Test extends jspb.Message { 
    getName(): string;
    setName(value: string): Test;
    getType(): TestType;
    setType(value: TestType): Test;
    getQuestion(): string;
    setQuestion(value: string): Test;
    clearQuizwordsList(): void;
    getQuizwordsList(): Array<string>;
    setQuizwordsList(value: Array<string>): Test;
    addQuizwords(value: string, index?: number): string;
    getImgurl(): string;
    setImgurl(value: string): Test;
    getInfo(): string;
    setInfo(value: string): Test;
    getAnswer(): string;
    setAnswer(value: string): Test;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Test.AsObject;
    static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Test;
    static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
    export type AsObject = {
        name: string,
        type: TestType,
        question: string,
        quizwordsList: Array<string>,
        imgurl: string,
        info: string,
        answer: string,
    }
}

export class Dialog extends jspb.Message { 
    getBotreply(): string;
    setBotreply(value: string): Dialog;
    getBotreplyaudio(): string;
    setBotreplyaudio(value: string): Dialog;
    getInstruction(): string;
    setInstruction(value: string): Dialog;
    getCanaudio(): boolean;
    setCanaudio(value: boolean): Dialog;
    getCantext(): boolean;
    setCantext(value: boolean): Dialog;
    getRecommendation(): string;
    setRecommendation(value: string): Dialog;
    getAnswermsgid(): string;
    setAnswermsgid(value: string): Dialog;
    getUsermsgid(): string;
    setUsermsgid(value: string): Dialog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dialog.AsObject;
    static toObject(includeInstance: boolean, msg: Dialog): Dialog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dialog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dialog;
    static deserializeBinaryFromReader(message: Dialog, reader: jspb.BinaryReader): Dialog;
}

export namespace Dialog {
    export type AsObject = {
        botreply: string,
        botreplyaudio: string,
        instruction: string,
        canaudio: boolean,
        cantext: boolean,
        recommendation: string,
        answermsgid: string,
        usermsgid: string,
    }
}

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getTestresultcomment(): string;
    setTestresultcomment(value: string): User;
    getLevel(): Level;
    setLevel(value: Level): User;
    getLanguage(): Language;
    setLanguage(value: Language): User;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Content | undefined;
    setContent(value?: Content): User;

    hasTest(): boolean;
    clearTest(): void;
    getTest(): Test | undefined;
    setTest(value?: Test): User;

    hasDialog(): boolean;
    clearDialog(): void;
    getDialog(): Dialog | undefined;
    setDialog(value?: Dialog): User;
    getNexttype(): NextType;
    setNexttype(value: NextType): User;

    getContentsmapMap(): jspb.Map<string, ContentList>;
    clearContentsmapMap(): void;
    clearMsgtodeleteList(): void;
    getMsgtodeleteList(): Array<number>;
    setMsgtodeleteList(value: Array<number>): User;
    addMsgtodelete(value: number, index?: number): number;
    clearMsgtoupdateList(): void;
    getMsgtoupdateList(): Array<number>;
    setMsgtoupdateList(value: Array<number>): User;
    addMsgtoupdate(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        testresultcomment: string,
        level: Level,
        language: Language,
        content?: Content.AsObject,
        test?: Test.AsObject,
        dialog?: Dialog.AsObject,
        nexttype: NextType,

        contentsmapMap: Array<[string, ContentList.AsObject]>,
        msgtodeleteList: Array<number>,
        msgtoupdateList: Array<number>,
    }
}

export class ContentList extends jspb.Message { 
    clearContentsList(): void;
    getContentsList(): Array<Content>;
    setContentsList(value: Array<Content>): ContentList;
    addContents(value?: Content, index?: number): Content;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentList.AsObject;
    static toObject(includeInstance: boolean, msg: ContentList): ContentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentList;
    static deserializeBinaryFromReader(message: ContentList, reader: jspb.BinaryReader): ContentList;
}

export namespace ContentList {
    export type AsObject = {
        contentsList: Array<Content.AsObject>,
    }
}

export class GetUserRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        telegramid: string,
    }
}

export class NextLessonRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): NextLessonRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextLessonRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextLessonRequest): NextLessonRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextLessonRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextLessonRequest;
    static deserializeBinaryFromReader(message: NextLessonRequest, reader: jspb.BinaryReader): NextLessonRequest;
}

export namespace NextLessonRequest {
    export type AsObject = {
        telegramid: string,
    }
}

export class NextSessionRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): NextSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextSessionRequest): NextSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextSessionRequest;
    static deserializeBinaryFromReader(message: NextSessionRequest, reader: jspb.BinaryReader): NextSessionRequest;
}

export namespace NextSessionRequest {
    export type AsObject = {
        telegramid: string,
    }
}

export class NextRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): NextRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextRequest): NextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextRequest;
    static deserializeBinaryFromReader(message: NextRequest, reader: jspb.BinaryReader): NextRequest;
}

export namespace NextRequest {
    export type AsObject = {
        telegramid: string,
    }
}

export class UserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class SendDialogRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): SendDialogRequest;
    getUserreply(): string;
    setUserreply(value: string): SendDialogRequest;
    getVoicefileurl(): string;
    setVoicefileurl(value: string): SendDialogRequest;
    getUsermsgid(): string;
    setUsermsgid(value: string): SendDialogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendDialogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendDialogRequest): SendDialogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendDialogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendDialogRequest;
    static deserializeBinaryFromReader(message: SendDialogRequest, reader: jspb.BinaryReader): SendDialogRequest;
}

export namespace SendDialogRequest {
    export type AsObject = {
        telegramid: string,
        userreply: string,
        voicefileurl: string,
        usermsgid: string,
    }
}

export class SendDialogMsgIdRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): SendDialogMsgIdRequest;
    getAnswermsgid(): string;
    setAnswermsgid(value: string): SendDialogMsgIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendDialogMsgIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendDialogMsgIdRequest): SendDialogMsgIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendDialogMsgIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendDialogMsgIdRequest;
    static deserializeBinaryFromReader(message: SendDialogMsgIdRequest, reader: jspb.BinaryReader): SendDialogMsgIdRequest;
}

export namespace SendDialogMsgIdRequest {
    export type AsObject = {
        telegramid: string,
        answermsgid: string,
    }
}

export class SendAnswerRequest extends jspb.Message { 
    getTelegramId(): string;
    setTelegramId(value: string): SendAnswerRequest;
    getUserReply(): string;
    setUserReply(value: string): SendAnswerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendAnswerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendAnswerRequest): SendAnswerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendAnswerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendAnswerRequest;
    static deserializeBinaryFromReader(message: SendAnswerRequest, reader: jspb.BinaryReader): SendAnswerRequest;
}

export namespace SendAnswerRequest {
    export type AsObject = {
        telegramId: string,
        userReply: string,
    }
}

export class UpdateButtonsRequest extends jspb.Message { 
    getTelegramId(): string;
    setTelegramId(value: string): UpdateButtonsRequest;
    clearButtonsList(): void;
    getButtonsList(): Array<number>;
    setButtonsList(value: Array<number>): UpdateButtonsRequest;
    addButtons(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateButtonsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateButtonsRequest): UpdateButtonsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateButtonsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateButtonsRequest;
    static deserializeBinaryFromReader(message: UpdateButtonsRequest, reader: jspb.BinaryReader): UpdateButtonsRequest;
}

export namespace UpdateButtonsRequest {
    export type AsObject = {
        telegramId: string,
        buttonsList: Array<number>,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getTelegramId(): string;
    setTelegramId(value: string): UpdateUserRequest;
    getName(): string;
    setName(value: string): UpdateUserRequest;
    getLanguage(): Language;
    setLanguage(value: Language): UpdateUserRequest;
    getLevel(): Level;
    setLevel(value: Level): UpdateUserRequest;
    getReftelegramid(): string;
    setReftelegramid(value: string): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        telegramId: string,
        name: string,
        language: Language,
        level: Level,
        reftelegramid: string,
    }
}

export class GenerateReferalLinkRequest extends jspb.Message { 
    getTelegramId(): string;
    setTelegramId(value: string): GenerateReferalLinkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateReferalLinkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateReferalLinkRequest): GenerateReferalLinkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateReferalLinkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateReferalLinkRequest;
    static deserializeBinaryFromReader(message: GenerateReferalLinkRequest, reader: jspb.BinaryReader): GenerateReferalLinkRequest;
}

export namespace GenerateReferalLinkRequest {
    export type AsObject = {
        telegramId: string,
    }
}

export class UpdateMessageIdForForceUpdateRequest extends jspb.Message { 
    getTelegramId(): string;
    setTelegramId(value: string): UpdateMessageIdForForceUpdateRequest;
    getMessageId(): string;
    setMessageId(value: string): UpdateMessageIdForForceUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMessageIdForForceUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMessageIdForForceUpdateRequest): UpdateMessageIdForForceUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMessageIdForForceUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMessageIdForForceUpdateRequest;
    static deserializeBinaryFromReader(message: UpdateMessageIdForForceUpdateRequest, reader: jspb.BinaryReader): UpdateMessageIdForForceUpdateRequest;
}

export namespace UpdateMessageIdForForceUpdateRequest {
    export type AsObject = {
        telegramId: string,
        messageId: string,
    }
}

export class GenerateReferalLinkResponse extends jspb.Message { 
    getReferalLink(): string;
    setReferalLink(value: string): GenerateReferalLinkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateReferalLinkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateReferalLinkResponse): GenerateReferalLinkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateReferalLinkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateReferalLinkResponse;
    static deserializeBinaryFromReader(message: GenerateReferalLinkResponse, reader: jspb.BinaryReader): GenerateReferalLinkResponse;
}

export namespace GenerateReferalLinkResponse {
    export type AsObject = {
        referalLink: string,
    }
}

export class NextContentRequest extends jspb.Message { 
    getType(): NextType;
    setType(value: NextType): NextContentRequest;
    getTelegramid(): string;
    setTelegramid(value: string): NextContentRequest;
    getMessageId(): string;
    setMessageId(value: string): NextContentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextContentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextContentRequest): NextContentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextContentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextContentRequest;
    static deserializeBinaryFromReader(message: NextContentRequest, reader: jspb.BinaryReader): NextContentRequest;
}

export namespace NextContentRequest {
    export type AsObject = {
        type: NextType,
        telegramid: string,
        messageId: string,
    }
}

export class DialogMessageRequest extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): DialogMessageRequest;
    getTelegramid(): string;
    setTelegramid(value: string): DialogMessageRequest;
    getMsgid(): string;
    setMsgid(value: string): DialogMessageRequest;
    getVoiceurl(): string;
    setVoiceurl(value: string): DialogMessageRequest;
    getPreparereportmessage(): string;
    setPreparereportmessage(value: string): DialogMessageRequest;
    getReport(): string;
    setReport(value: string): DialogMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DialogMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DialogMessageRequest): DialogMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DialogMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DialogMessageRequest;
    static deserializeBinaryFromReader(message: DialogMessageRequest, reader: jspb.BinaryReader): DialogMessageRequest;
}

export namespace DialogMessageRequest {
    export type AsObject = {
        msg: string,
        telegramid: string,
        msgid: string,
        voiceurl: string,
        preparereportmessage: string,
        report: string,
    }
}

export class SendPointsRequest extends jspb.Message { 
    getTelegramid(): string;
    setTelegramid(value: string): SendPointsRequest;
    getPoints(): number;
    setPoints(value: number): SendPointsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendPointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendPointsRequest): SendPointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendPointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendPointsRequest;
    static deserializeBinaryFromReader(message: SendPointsRequest, reader: jspb.BinaryReader): SendPointsRequest;
}

export namespace SendPointsRequest {
    export type AsObject = {
        telegramid: string,
        points: number,
    }
}

export class GeneralResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GeneralResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneralResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeneralResponse): GeneralResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneralResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneralResponse;
    static deserializeBinaryFromReader(message: GeneralResponse, reader: jspb.BinaryReader): GeneralResponse;
}

export namespace GeneralResponse {
    export type AsObject = {
        result: string,
    }
}

export enum ContentType {
    UNKNOWN = 0,
    READ = 1,
    VIDEO = 2,
    INFO = 3,
    IMAGE = 4,
    AUDIO = 5,
}

export enum TestType {
    UNKNOWN_TEST_TYPE = 0,
    TEXT = 1,
    QUIZ = 2,
    CARD = 3,
    GUESS = 4,
}

export enum NextType {
    UNKNOWN_NEXT_TYPE = 0,
    CONTENT = 1,
    TEST = 2,
    DIALOG = 3,
}

export enum Language {
    UNKNOWN_LANGUAGE = 0,
    RUSSIAN = 1,
    UKRAINE = 2,
}

export enum Level {
    UNKNOWN_LEVEL = 0,
    A1 = 1,
    A2 = 2,
    B1 = 3,
    B2 = 4,
}
