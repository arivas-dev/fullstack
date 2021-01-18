import { messages } from 'constants/messages';

export const errorHandler = (response, defaultMessage = messages.common.server) => {
  console.log('response', response);
  const { data = { }, status } = response || { };
  switch (status) {
    case 400: return data.error || defaultMessage;
    case 404: return data.error || defaultMessage;
    case 500: return messages.common.server;
    default: return messages.common.server;
  }
}
