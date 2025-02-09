/**
 * Workaround for https://discord.com/channels/480462759797063690/484421406659182603/827512106696966154
 *
 * @template T
 */
export type GlintTemporaryTypeFix<T> = { [K in keyof T]: T[K] };

/**
 * Base Signature for Glimmer component. Temporary until strict mode comes
 *
 * @export
 * @interface BaseGlimmerSignature
 * @template T
 */
export interface BaseGlimmerSignature<T> {
    Element?: HTMLElement;
    Args: GlintTemporaryTypeFix<T>;
    Yields: {
        default?: [];
    };
}
/**
 * Helper to modify the yields property when the `BaseGlimmerSignature` wont work for you. Temporary until strict mode comes
 *
 * @export
 * @interface BaseGlimmerSignature
 * @template T
 */
export type ModifyYields<T, Y> = Omit<T, 'Yields'> & Y;
