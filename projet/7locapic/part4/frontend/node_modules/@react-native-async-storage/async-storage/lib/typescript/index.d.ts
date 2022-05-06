import AsyncStorage from './AsyncStorage';
import type { AsyncStorageHook, AsyncStorageStatic } from './types';
export { useAsyncStorage } from './hooks';
export type { AsyncStorageStatic } from './types';
export default AsyncStorage;
declare module '@react-native-async-storage/async-storage/jest/async-storage-mock' {
    export function useAsyncStorage(key: string): AsyncStorageHook;
    const AsyncStorageLib: AsyncStorageStatic;
    export default AsyncStorageLib;
}
