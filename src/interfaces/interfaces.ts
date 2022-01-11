import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductInCart extends Product {
    count: number
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element,
    Image: ({ img, className }: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: { className?: string }) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number 
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}
