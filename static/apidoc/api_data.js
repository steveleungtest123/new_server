define({ "api": [
  {
    "type": "get",
    "url": "/questions",
    "title": "Request question List By Page",
    "group": "Questions",
    "name": "GetQuestionListByPage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>the page number of the list</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-With-Valid:",
          "content": "{\n \"status\": \"good\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/QuestionsRoute.ts",
    "groupTitle": "Questions"
  }
] });