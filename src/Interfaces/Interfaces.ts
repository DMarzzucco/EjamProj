export interface HeaderProps {
    src: string;
    text: string;
    textRes?: string;
}
export interface Size {
    Width: number;
    Heigth: number;
}
export interface ListProps {
    child: JSX.Element;
}

export type ArrowsProps = { onClick?: () => void; }