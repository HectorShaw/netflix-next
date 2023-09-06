import connectToDB from "@/database";
import Account from "@/models/Account";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    constid = searchParams.get("id");
    if(!id){
      return NextResponse.json({
        success: false,
        message: "No such id is present",
      });
    }
    const deleteAccounts = await Account.findByIdAndDelete({id});

    if (deleteAccounts) {
      NextResponse.json({
        success: true,
        message: "Sucessfully Deleted",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went wrong",
      });
    }

  }


  catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went wrong",
    });
  }
}