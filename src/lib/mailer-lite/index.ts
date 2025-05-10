import MailerLite from "@mailerlite/mailerlite-nodejs";
import {
  GetSubscribersParams,
  CreateOrUpdateSubscriberParams,
} from "@mailerlite/mailerlite-nodejs";

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_API_KEY!,
});

if (!process.env.MAILER_LITE_API_KEY) {
  throw new Error("MAILER_LITE_API_KEY is missing in environment variables");
}

export async function addSubscriber(email: string) {
  const newsletterGroupID = "151862254197802746"

  const params: CreateOrUpdateSubscriberParams = {
    email: email,
    fields: {
      name: "Test",
    },
    groups: [newsletterGroupID],
  };

  try {
    const res = await mailerlite.subscribers.createOrUpdate(params);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getSubscribers() {
  const params: GetSubscribersParams = {
    filter: {
      status: "active",
    },
    limit: 5,
  };

  try {
    const res = await mailerlite.subscribers.get(params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
