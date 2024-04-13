'use server';

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function increment(slug: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data: allViews, error } = await supabase
      .from("views")
      .select(`*`)
      .eq('slug', slug)
      .single();

    if (error) {
      return null;
    }

    const existingViews = allViews.count;
    let count = 1;

    count = existingViews + 1;

    const { data: dataViews, error: dataError } = await supabase
      .from("views")
      .update({ count: count })
      .match({ slug: allViews.slug })
      .select()
      .single();

    if (dataError) {
      return null;
    }

  } catch (error) {
    return null;
  }
}
