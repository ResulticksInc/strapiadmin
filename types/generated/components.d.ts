import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    plan: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    input: Schema.Attribute.Component<'elements.input', true>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    inputType: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['LINK', 'PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    planPrice: Schema.Attribute.String;
    planType: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface LayoutTopNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navigations';
  info: {
    displayName: 'Top Navigation';
  };
  attributes: {
    logoTitle: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
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
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.link': ElementsLink;
      'elements.pricing-card': ElementsPricingCard;
      'layout.top-navigation': LayoutTopNavigation;
      'seo.meta-data': SeoMetaData;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
