import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { StoreProvider } from '@/redux/StoreProvider';

const RenderTestComponent = (children: ReactNode) => {
  return render(<StoreProvider>{children}</StoreProvider>);
};
export default RenderTestComponent;
