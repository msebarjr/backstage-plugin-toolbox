import React from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor';
import { ContentHeader, MarkdownContent } from '@backstage/core-components';
import { Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../utils/hooks';

export const MarkdownPreview = () => {
  const styles = useStyles();
  const [input, setInput] = React.useState('');

  return (
    <>
      <ContentHeader title="Markdown preview" />
      <DefaultEditor
        input={input}
        setInput={setInput}
        rightContent={
          <>
            <Typography variant="subtitle1">Preview</Typography>
            <Paper elevation={0} className={styles.previewPaper}>
              <MarkdownContent content={input} />
            </Paper>
          </>
        }
      />
    </>
  );
};