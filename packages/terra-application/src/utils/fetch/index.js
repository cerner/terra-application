import uuidv4 from 'uuid/v4';

const getAuthHeaders = async () => {
  const headers = {
    'Test-Correlation-Id': uuidv4(),
    'Test-Time-Zone': 'utc', // moment.tz.guess(true),
  };

  const authenticityToken = document.querySelector('meta[name="csrf-token"]');

  if (authenticityToken && authenticityToken.content) {
    headers['X-CSRF-Token'] = authenticityToken.content;
    headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  const promiseHeaders = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        'Test-Header-1': 'A',
        'Test-Header-2': 'B',
      });
    }, 1000);
  });

  return { ...headers, ...promiseHeaders };
};

export { getAuthHeaders };
