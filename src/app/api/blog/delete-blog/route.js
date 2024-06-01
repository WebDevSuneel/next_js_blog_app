import connetToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {

    try {
        await connetToDB()
        const { searchParams } = new URL(req.url)
        const currentBlogId = searchParams.get('id')
        console.log(currentBlogId);
        if (!currentBlogId) {
            return NextResponse.json({
                success: false,
                message: "ID is required"
            })
        }
        const deleteBlogItem = await Blog.findByIdAndDelete(currentBlogId)
        console.log("deleteBlogItem" + deleteBlogItem);
        if (deleteBlogItem) {
            return NextResponse.json({
                success: true,
                message: "Blog item is deleled successfully"
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Somthing went worng! Failed to delete blog item'
            })
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: 'Somthing went worng!',
        })
    }
}