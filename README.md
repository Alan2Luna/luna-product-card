# AL-Product-Card

Este es un paquete de prueba de despligue en NPM

### Alan Luna

### Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'al-product-card';
```
```
<ProductCard 
    key={ product.id }
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, isMaxCountReached, increaseBy, maxCount, count }) => (
            <>
                <ProductImage /> 
                <ProductTitle /> 
                <ProductButtons /> 
            </>
        )
    }
</ProductCard>
```