import { supabase } from "@/lib/supabase/client";

export interface HomeUser {
  name: string;
  id: string;
  phone: string;
}

// 13:25分 - 15：00 写接口
export const createUser = async (user: HomeUser) => {
  const { error, data } = await supabase.from("users").insert(user);
  if (error) {
    console.log(error, "error");
    throw error;
  }
  return data;
};

export const getUser = async () => {
  const { error, data } = await supabase.from("users").select();
  if (error) {
    console.log(error, "error");
    throw error;
  }
  return data;
};

export const deleteUser = async (id: string) => {
  const { error, data } = await supabase.from("user").delete().eq("id", id);
  if (error) {
    console.log(error, "error");
    throw error;
  }
  return data;
};
