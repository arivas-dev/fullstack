import { message } from 'antd';
import { useState, useEffect, useCallback } from 'react';

export const useMessenger = (loadable = {}, success) => {
  const { isLoading, firstFetch, error } = loadable;
  const [wasDisplayed, setWasDisplayed] = useState(!isLoading && !firstFetch);

  const displayMessage = useCallback(() => {
    if (error) {
      message.error(error);
    } else {
      message.success(success);
    }
  }, [error, success]);

  useEffect(() => {
    if (!isLoading && !firstFetch && !wasDisplayed) {
      displayMessage();
    }
  }, [isLoading, displayMessage, firstFetch, wasDisplayed]);

  useEffect(() => {
    if (isLoading) {
      setWasDisplayed(false);
    }
  }, [isLoading]);

  return null;
};