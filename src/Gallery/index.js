import React from "react";
import PropTypes from "prop-types";
import EnhanceProductGallery from "./EnhanceProductGallery";
import ProductGalleryQuery from "./ProductGalleryQuery.gql";

const ProductGallery = ({ topPosts }) => {
  return <div>123456</div>;
};

ProductGallery.propTypes = {
  mainImageSrc: PropTypes.string
};

const SmartGallery = EnhanceProductGallery({ ProductGalleryQuery })(
  ProductGallery
);

export default SmartGallery;
