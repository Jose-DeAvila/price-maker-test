export interface IButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text: string;
}