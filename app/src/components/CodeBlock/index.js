import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';

const CodeBlock = ({
  codeBlock,
}) => (
  <Box full flex pad={{ horizontal: 'medium' }}>
    <Box pad={{ between: 'medium' }} align="start">
      <pre>
        <code className={styles.codeBlock}>
          {codeBlock}
        </code>
      </pre>
    </Box>
  </Box>
);

CodeBlock.propTypes = {
  codeBlock: PropTypes.node.isRequired,
};

export default cssModules(CodeBlock, styles);
