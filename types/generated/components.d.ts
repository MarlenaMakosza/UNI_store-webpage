import type { Schema, Struct } from '@strapi/strapi';

export interface OrderAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_addresses';
  info: {
    description: 'Shipping or billing address';
    displayName: 'Address';
    icon: 'pinMap';
    name: 'Address';
  };
  attributes: {
    apartmentNumber: Schema.Attribute.String;
    buildingNumber: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    company: Schema.Attribute.String;
    country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Poland'>;
    email: Schema.Attribute.Email;
    firstName: Schema.Attribute.String & Schema.Attribute.Required;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.String & Schema.Attribute.Required;
    street: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_order_items';
  info: {
    description: 'Single item in an order with product snapshot';
    displayName: 'Order Item';
    icon: 'shoppingCart';
    name: 'Order Item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sku: Schema.Attribute.String & Schema.Attribute.Required;
    total: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface ProductTechnicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_product_technical_specs';
  info: {
    description: 'Technical specification entry with group, name and value';
    displayName: 'Technical Specifications';
    icon: 'list';
    name: 'Technical Specifications';
  };
  attributes: {
    group: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.address': OrderAddress;
      'order.order-item': OrderOrderItem;
      'product.technical-specs': ProductTechnicalSpecs;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
