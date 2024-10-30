import type { Struct, Schema } from '@strapi/strapi';

export interface ProductOrderedImages extends Struct.ComponentSchema {
  collectionName: 'components_product_ordered_images';
  info: {
    displayName: 'orderedImages';
    icon: 'file';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    fileName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.ordered-images': ProductOrderedImages;
      'product.box-item': ProductBoxItem;
    }
  }
}
