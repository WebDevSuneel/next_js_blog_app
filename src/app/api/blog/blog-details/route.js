import connetToDB from "@/database"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function GET(req) {
    try {
        await connetToDB()
        const { searchParams } = new URL(req.url)
        const currentBlogId = searchParams.get('id')
        if (!currentBlogId) {
            return NextResponse.json({
                success: false,
                message: "Id is required"
            })
        }   
        const getBlogDetails = await Blog.find({_id: currentBlogId})
        if (getBlogDetails && getBlogDetails.length) {
            return NextResponse.json({
                success: true,
                data: getBlogDetails[0]
            })
        }
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Somethin went wrong"
        })
    }
}