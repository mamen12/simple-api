import { DateTime } from 'luxon'
import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm'


export default class Todo extends BaseModel {
  @column()
  public userId: number

  @column({ isPrimary: true })
  public id: number

  @column({})
  public title: String
  @column()
  public is_completed: Boolean

  @column.dateTime({ autoCreate: true, serialize: (value:DateTime) => value.toFormat('dd LLLL yyyy, TT')  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value:DateTime) => value.toFormat('dd LLLL yyyy, TT')  })
  public updatedAt: DateTime

 


}
