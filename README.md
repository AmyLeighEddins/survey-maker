# Survey Maker

## Intro
A survey template creator and survey builder web application so that employees can create their own survey templates and create surveys from those templates while being able to manage the responses of those surveys.

## Purpose
Currently if a survey needs to be created it has to be created through SQL queries on the database and that is just not sustainable and they need a much better user experience. This apporach will be much more user friendly. 

## Features

#### Must Have
- Ability to create, edit, and delete survey templates
- Ability to create, edit, and delete surveys from the survey templates or from a blank template
- Ability to login to manage surveys and templates
- Ability to save drafts of the survey templates, surveys, and survey responses
- Ability to submit survey
- Ability to pick from several question types when adding a question to a survey template or survey
- Ability to set a survey type to a survey template
- Ability to set survey tags to a survey template
- Ability to collect responses
- Ability to manage responses
  - started or completed
- Ability to have the following question types:
  - Short Answer
  - Paragraph Answer
  - Multiple choice
  - Checkboxes
  - Dropdown
  - Linear Scale
- Ability to have the following options for questions:
  - Required/Not required setting (default to required)
  - Duplicate
  - Delete

#### Should Have
- Ability to get metadata from surveys taken
- Ability to send out emails to request survey responses
- Ability to have the following question types:
  - File Upload
  - Date
  - Time
- Ability to have the following options for surveys/templates:
  - Anonymous or not
  - Public (publish) or private

#### Could Have
- Ability to publish survey templates for others to use
- Ability to automatically send out reminder emails to survey respondents that haven't completed it yet
- Ability to add emails to survey templates
- Ability to have the following optional additons to questions:
  - Image
  - Video
  - Sections or Title/Description to sets of questions

#### Wish List

## Domain Diagram
```mermaid
erDiagram
  Surveys ||--o{ SurveyAssociatedTags : "have many"
  Surveys ||--o{ SurveyQuestions : "have many"
  Surveys ||--o{ PerformanceReviewSurveys : "have many"
  Surveys ||--o{ SurveyEmployeeRecipients : "have many"
  Surveys ||--o{ SurveyExternalRecipients : "have many"
  Surveys ||--o{ SurveyMetadata : "have many"

  SurveyTemplates ||--o{ SurveyTemplateAssociatedTags : "have many"
  SurveyTemplates ||--o{ SurveyTemplateQuestions : "have many"
  SurveyTemplates ||--o{ SurveyTemplatesMetadata : "have many"

  SurveyTypes ||--o{ Surveys : "have many"
  SurveyTypes ||--o{ SurveyTemplates : "have many"

  SurveyTags ||--o{ SurveyAssociatedTags : "have many"
  SurveyTags ||--o{ SurveyTemplateAssociatedTags : "have many"

  SurveyQuestionTypes ||--o{ SurveyQuestions : "have many"
  SurveyQuestionTypes ||--o{ SurveyTemplateQuestions : "have many"

  SurveyStatuses ||--o{ SurveyEmployeeRecipients : "have many"
  SurveyStatuses ||--o{ SurveyExternalRecipients : "have many"

  SurveyEmployeeRecipients ||--o{ SurveyEmployeeResponses : "have many"
  SurveyExternalRecipients ||--o{ SurveyExternalResponses : "have many"

  SurveyMetadataTypes ||--o{ SurveyTemplatesMetadata : "have many"
  SurveyMetadataTypes ||--o{ SurveyMetadata : "have many"

  SurveyEmployeeResponses ||--o{ SurveyResponseItems : "have many"
  SurveyExternalResponses ||--o{ SurveyResponseItems : "have many"

  SurveyResponseItems ||--|| SurveyQuestions : "have many"
```

## ERD
```mermaid
erDiagram
  SurveyTypes {
      INT id PK
      TEXT description
  }
  
  SurveyTags {
      INT id PK
      TEXT description
  }
  
  Surveys {
      INT id PK
      TEXT summary
      DATE created_date
      DATE expiry_date
      INT survey_type_id FK
  }
  
  SurveyAssociatedTags {
      INT id PK
      INT survey_tag_id FK
      INT survey_id FK
  }
  
  SurveyQuestionTypes {
      INT id PK
      TEXT description
  }
  
  SurveyQuestions {
      INT id PK
      TEXT title
      TEXT description
      TEXT tooltip
      INT sequence
      INT survey_question_type_id FK
      INT survey_id FK
  }
  
  SurveyTemplates {
      INT id PK
      TEXT name
      TEXT summary
      DATE created_date
      DATE updated_date
      INT survey_type_id FK
  }

  SurveyTemplateQuestions {
      INT id PK
      TEXT title
      TEXT description
      TEXT tooltip
      INT sequence
      INT survey_question_type_id FK
      INT survey_tempalte_id FK
  }
  
  SurveyTemplateAssociatedTags {
      INT id PK
      INT survey_template_id FK
      INT survey_tag_id FK
  }
  
  PerformanceReviewSurveys {
      INT id PK
      INT performance_review_id
      INT survey_id FK
  }
  
  SurveyStatuses {
      INT id PK
      TEXT name
  }
  
  SurveyEmployeeRecipients {
      UUID id PK
      INT employee_id
      INT survey_id FK
      INT survey_status_id FK
  }
  
  SurveyEmployeeResponses {
      INT id PK
      UUID survey_employee_recipient_id FK
      INT survey_response_item_id
  }
  
  SurveyExternalRecipients {
      UUID id PK
      TEXT email_address
      INT survey_id FK
      INT survey_status_id FK
  }
  
  SurveyExternalResponses {
      INT id PK
      UUID survey_external_recipient_id FK
      INT survey_response_item_id
  }
  
  SurveyResponseItems {
      INT id PK
      TEXT value
      INT survey_question_id FK
  }
  
  SurveyMetadataTypes {
      INT id PK
      TEXT description
  }
  
  SurveyTemplatesMetadata {
      INT id PK
      INT survey_template_id FK
      INT user_form_metadata_type_id FK
  }
  
  SurveyMetadata {
      INT id PK
      TEXT value
      INT user_form_metadata_type_id FK
      INT survey_id FK
  }

  Surveys ||--o{ SurveyAssociatedTags : "have many"
  Surveys ||--o{ SurveyQuestions : "have many"
  Surveys ||--o{ PerformanceReviewSurveys : "have many"
  Surveys ||--o{ SurveyEmployeeRecipients : "have many"
  Surveys ||--o{ SurveyExternalRecipients : "have many"
  Surveys ||--o{ SurveyMetadata : "have many"

  SurveyTemplates ||--o{ SurveyTemplateAssociatedTags : "have many"
  SurveyTemplates ||--o{ SurveyTemplateQuestions : "have many"
  SurveyTemplates ||--o{ SurveyTemplatesMetadata : "have many"

  SurveyTypes ||--o{ Surveys : "have many"
  SurveyTypes ||--o{ SurveyTemplates : "have many"

  SurveyTags ||--o{ SurveyAssociatedTags : "have many"
  SurveyTags ||--o{ SurveyTemplateAssociatedTags : "have many"

  SurveyQuestionTypes ||--o{ SurveyQuestions : "have many"
  SurveyQuestionTypes ||--o{ SurveyTemplateQuestions : "have many"

  SurveyStatuses ||--o{ SurveyEmployeeRecipients : "have many"
  SurveyStatuses ||--o{ SurveyExternalRecipients : "have many"

  SurveyEmployeeRecipients ||--o{ SurveyEmployeeResponses : "have many"
  SurveyExternalRecipients ||--o{ SurveyExternalResponses : "have many"

  SurveyMetadataTypes ||--o{ SurveyTemplatesMetadata : "have many"
  SurveyMetadataTypes ||--o{ SurveyMetadata : "have many"

  SurveyEmployeeResponses ||--o{ SurveyResponseItems : "have many"
  SurveyExternalResponses ||--o{ SurveyResponseItems : "have many"

  SurveyResponseItems ||--|| SurveyQuestions : "have many"
```