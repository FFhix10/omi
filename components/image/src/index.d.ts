import { WeElement } from 'omi';
interface Props {
    src?: string;
    fit?: string;
}
export default class Image extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        src: StringConstructor;
        fit: StringConstructor;
    };
    loaded: boolean;
    loadError: boolean;
    onLoad: () => void;
    onError: () => void;
    placeholder: any;
    error: any;
    installed(): void;
    updated(): void;
    render(props: any): JSX.Element;
}
export {};
