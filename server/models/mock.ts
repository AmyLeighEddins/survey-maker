export const getAllSurveyExternalRecipients = async () => {
  return [
    {
      id: 1,
      email_address: 'email 1',
      survey_status_id: 1,
      survey_id: 1
    },
    {
      id: 2,
      email_address: 'email 2',
      survey_status_id: 2,
      survey_id: 2
    },
    {
      id: 3,
      email_address: 'email 3',
      survey_status_id: 3,
      survey_id: 3
    }
  ];
};

export const getAllSurveyEmployeeRecipients = async () => {
  return [
    {
      id: 1,
      employee_id: 1,
      survey_status_id: 1,
      survey_id: 1
    },
    {
      id: 2,
      employee_id: 2,
      survey_status_id: 2,
      survey_id: 2
    },
    {
      id: 3,
      employee_id: 3,
      survey_status_id: 3,
      survey_id: 3
    }
  ];
};

export const getAllSurveyTemplateQuestions = async () => {
  return [
    {
      id: 1,
      title: 'Question 1',
      description: 'Description 1',
      tooltip: 'Tooltip 1',
      sequence: 1,
      survey_question_type_id: 1,
      survey_template_id: 1
    },
    {
      id: 2,
      title: 'Question 2',
      description: 'Description 2',
      tooltip: 'Tooltip 2',
      sequence: 2,
      survey_question_type_id: 2,
      survey_template_id: 2
    },
    {
      id: 3,
      title: 'Question 3',
      description: 'Description 3',
      tooltip: 'Tooltip 3',
      sequence: 3,
      survey_question_type_id: 3,
      survey_template_id: 3
    },
  ]
};

export const getAllSurveysResponseItems = async () => {
  return [{
    id: 1,
    value: 'example 1',
    survey_question_id: 1,
  }, {
    id: 2,
    value: 'example 2',
    survey_question_id: 2,
  }, {
    id: 3,
    value: 'example 3',
    survey_question_id: 3,
  }]
};

export const getAllSurveyExternalResponses = async () => {
  return [{
    id: 1,
    survey_external_recipient_id: 1,
    survey_response_item_id: 1,
  }, {
    id: 2,
    survey_external_recipient_id: 1,
    survey_response_item_id: 2,
  }, {
    id: 3,
    survey_external_recipient_id: 2,
    survey_response_item_id: 3,
  }]
};

export const getAllSurveyEmployeeResponses = async () => {
  return [{
    id: 1,
    survey_employee_recipient_id: 1,
    survey_response_item_id: 1,
  }, {
    id: 2,
    survey_employee_recipient_id: 1,
    survey_response_item_id: 2,
  }, {
    id: 3,
    survey_employee_recipient_id: 2,
    survey_response_item_id: 3,
  }]
};