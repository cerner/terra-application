import { renderHook, act } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import useForceUpdate from '../../../../src/notification-banner/private/useForceUpdate';

describe('useForceUpdate', () => {
  test('should trigger updates when returned function is executed', async () => {
    const { result } = renderHook(() => useForceUpdate());

    expect(result.all.length).toBe(1);

    act(() => { result.current(); });

    expect(result.all.length).toBe(2);
  });
});
