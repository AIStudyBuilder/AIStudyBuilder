import type { User, UserResponse } from '@/proto/getuser/getuser_pb';
import type { ServiceError } from '@grpc/grpc-js';

export const checkUserResponse = async <T extends UserResponse>(
  request: Promise<T | ServiceError>,
  errorCallback: (error: Error, message?: string) => void,
): Promise<User | undefined> => {
  try {
    const response = await request;

    if (response instanceof Error) {
      errorCallback(response);
      return;
    }

    const user = response.getUser();

    if (!user) errorCallback(new Error('Пользователь не существует'), 'Пользователь не существует');

    return user;
  } catch (e) {
    errorCallback(e as Error);
    return;
  }
};
