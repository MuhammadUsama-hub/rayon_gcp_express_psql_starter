import { AuthTemplateType } from "#/src/lib/mail/mail.types";
import { Role } from "#/src/lib/utils/roles";
import { SanitizedUser, UserCreate } from "#/src/modules/user/user.types";

export type AuthUser = {
  id: string;
  email: string;
  role: Role;
};

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthSignup = Omit<UserCreate, "role"> & { password: string };

export type AuthVerifyEmail = {
  otp: string;
  email: string;
};

<<<<<<< Updated upstream
=======
export type AuthForgotPass = {
  email: string;
};

export type AuthResetPass = {
  email: string;
  otp: string;
  password: string;
};

export type AuthChangePass = {
  email: string;
  password: string;
};

export type AuthVerification = {
  email: string;
  emailType: AuthTemplateType;
};

export type AuthRefreshToken = {
  token: string;
};

export type AuthTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

>>>>>>> Stashed changes
export type AuthLoginResponse = {
  user: SanitizedUser;
  accessToken: string;
  refreshToken: string;
};
