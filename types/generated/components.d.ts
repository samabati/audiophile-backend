import type { Schema, Struct } from '@strapi/strapi';

export interface ProductBoxItem extends Struct.ComponentSchema {
  collectionName: 'components_product_box_items';
  info: {
    displayName: 'boxItem';
    icon: 'archive';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface ProductOrderedImages extends Struct.ComponentSchema {
  collectionName: 'components_product_ordered_images';
  info: {
    description: '';
    displayName: 'orderedImages';
    icon: 'file';
  };
  attributes: {
    fileName: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.box-item': ProductBoxItem;
      'product.ordered-images': ProductOrderedImages;
    }
  }
}
