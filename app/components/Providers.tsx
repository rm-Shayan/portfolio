'use client';

import { Provider } from 'react-redux';
import { store } from '../../lib/store';
import ThemeRegistry from './ThemeRegistry/ThemeRegistry';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeRegistry>{children}</ThemeRegistry>
        </Provider>
    );
}
