'use client'

export default function BlogDetailsComponents({blogDetails}) {
    return <div className="p-4 flex flex-col gap-4 border border-red-600">
        <p>{blogDetails?.title}</p>
        <p>{blogDetails?.description}</p>
    </div>
}