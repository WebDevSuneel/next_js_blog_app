import BlogListComponent from "@/components/blog/list"
async function fetchAllBlog() {
    const response = await fetch(`http://localhost:3000/api/blog/get-all-blogs`,{
        method: 'GET',
        cache: 'no-store',
    })
    const result = await response.json()
    if (result?.success) return result.data
}
export default async function BlogList() {
    const getAllBlogs = await fetchAllBlog()
    return (
        <div className=" flex main-h-screen flex-col p-8">
            <h1 className="font-bold text-lg">Blog List</h1>
            <BlogListComponent getAllBlogs={getAllBlogs} />
        </div>
    )
}