import connetToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connetToDB()
        const extractData = await req.json()
        const newlyCreatedBlogData = await Blog.create(extractData)
        if (newlyCreatedBlogData) {
            return NextResponse.json({
                success: true,
                massage: 'Blog add successfully'
            })
        }
        else {
            return NextResponse.json({
                success: false,
                massage: 'Faild to add new blog to database ! Please try agin'
            })
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            massage: 'Something went wrong!'
        })
    }
}