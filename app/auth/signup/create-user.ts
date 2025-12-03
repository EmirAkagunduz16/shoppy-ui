"use server";

import { FormError } from "@/app/common/form-error.interface";
import API_URL from "@/app/common/constants/api";
import { post } from "@/app/common/utils/fetch";
import { getErrorMessage } from "@/app/common/utils/format-error";
import { redirect } from "next/navigation";

// export default async function createUser(_prevState: any, formData: FormData) {
//   const res = await fetch(`${API_URL}/users`, {
//     method: "POST",
//     body: formData,
//   });

//   const parsedRes = await res.json();
//   if (!res.ok) {
//     return { error: getErrorMessage(parsedRes) };
//   }
//   redirect("/");
// }

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
