import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import { Messages, Header, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';

const ArticlesForm = ({
  error, loading, success, onFormSubmit, defaultValues,
}) => {
  const {
    register, handleSubmit, errors, setValue,
  } = useForm({ defaultValues });

  useEffect(() => {
    register({ name: 'email' }, { required: errorMessages.missingEmail });
  }, [register]);

  return (
    null
  );
};

ArticlesForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.string,
  defaultValues: PropTypes.shape({
    email: PropTypes.string,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};

ArticlesForm.defaultProps = {
  error: null,
  success: null,
  loading: false,
  defaultValues: {},
};

export default ArticlesForm;
