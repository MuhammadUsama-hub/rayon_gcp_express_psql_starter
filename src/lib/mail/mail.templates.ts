import { FE_URL } from "../constants";

const notification = {
  general: ({
    title,
    body,
    link,
    image,
  }: {
    title: string;
    body: string;
    link?: string;
    image?: string;
  }) => {
    return {
      id: 4,
      data: {
        title,
        body,
        link,
        image,
      },
    };
  },
};

const authentication = {
  verifyEmail: ({
    otp,
    name,
    email,
  }: {
    otp: string;
    name: string;
    email: string;
  }) => {
    return {
      id: 1,
      data: {
        otp,
        name,
        email,
        link: `${FE_URL}/verify-email?email=${email}&otp=${otp}`,
      },
    };
  },

  forgotPassword: ({
    otp,
    name,
    email,
  }: {
    otp: string;
    name: string;
    email: string;
  }) => {
    return {
      id: 2,
      data: {
        otp,
        name,
        email,
        link: `${FE_URL}/reset-password?email=${email}&otp=${otp}`,
      },
    };
  },

  inviteUser: ({
    otp,
    name,
    email,
    role,
  }: {
    otp: string;
    name: string;
    email: string;
    role?: string;
  }) => {
    return {
      id: 3,
      data: {
        name,
        role,
        link: `${FE_URL}/reset-password?email=${email}&otp=${otp}&new=true`,
        otp,
      },
    };
  },
};

const sibTemplates = {
  notification,
  authentication,
};

export default sibTemplates;
