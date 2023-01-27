import { ColumnContainer, ColumnTitle } from './styles';

// define props as a type
type ColumnProps = {
    text: string;
    children: React.ReactNode;
};

export const Column = ({ text, children }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    );
};
