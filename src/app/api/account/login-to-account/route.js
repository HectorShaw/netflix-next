import connectToDB from "@/database";
import Account from "@/models/Account";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { pinn, accountId, uid } = await req.json();

    const getCurrentAccount = await Account.findOne({ _id: accountId, uid });

    if (!getCurrentAccount) {
      return NextResponse.json({
        success: false,
        message: "No account found",
      });
    }
    const checkPin = await compare(pin, getCurrentAccount.pin);
    if (checkPin) {
      return NextResponse.json({
        success: true,
        message: "Welcome we are setting you up",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "incorrect pin",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went wrong",
    });
  }
}
