export default `
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateNameStyle'
import logic from './TemplateNameLogic'

const TEMPLATE_NAME = (props) => {
  const {} = props;

  return (
    <View style={styles.container}></View>
  )
};

TEMPLATE_NAME.propTypes = {

};

TEMPLATE_NAME.defaultProps = {

};

export default TEMPLATE_NAME;
`;

