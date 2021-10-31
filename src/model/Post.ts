import { PostStatus } from "../types"

class Post {
    _id: string = ''
    /** 发布时间 */
    createTime: Date = new Date()
    /** 发布者 */
    personId: string = ""
    /** 状态 */
    status: PostStatus = PostStatus.visible
    /** 点赞数量 */
    likeNum: number = 0
    /** 内容 */
    content: string = ''
    /** 插入图片 */
    images: Array<string> = []
}

export default Post