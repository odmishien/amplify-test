import Auth from "@aws-amplify/auth";
import Analytics from "@aws-amplify/analytics";

import awsconfig from "./aws-exports";

Auth.configure(awsconfig);
Analytics.configure(awsconfig);

const AnalyticsResult = document.getElementById('AnalyticsResult');
const AnalyticsEventButton = document.getElementById('AnalyticsEventButton');
let EventsSent = 0;

AnalyticsEventButton.addEventListener('click', e => {
  const { aws_mobile_analytics_app_region, aws_mobile_analytics_app_id } = awsconfig;

  Analytics.record('Amplify Tutorial')
    .then(e => {
      const url = `https://${aws_mobile_analytics_app_region}.console.aws.amazon.com/pinpoint/home/?region=${aws_mobile_analytics_app_region}#/apps/${aws_mobile_analytics_app_id}/analytics/events`;
      AnalyticsResult.innerHTML = '<p>Event Submitted. </p>';
      AnalyticsResult.innerHTML += '<p>Events sent: '+(++EventsSent)+'</p>';
      AnalyticsResult.innerHTML += '<a href="'+url+'" target="_blank">View Events on the Amazon Pinpoint Console</a>';
  })
})
