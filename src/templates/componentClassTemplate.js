export default `
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateNameStyle'

class TEMPLATE_NAME extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

TEMPLATE_NAME.propTypes = {};

TEMPLATE_NAME.defaultProps = {};

export default TEMPLATE_NAME;
`;
