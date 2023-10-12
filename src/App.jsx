import classes from './App.module.css';
import userImage from '../src/image/user.png';
import mailImage from '../src/image/mail.png';
import calendarImage from '../src/image/calendar.png';
import locationImage from '../src/image/location.png';
import phoneImage from '../src/image/phone-call.png';
import schoolImage from '../src/image/mortarboard.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


function App() {
    const onClickhome = () => {
        window.scroll({
            top: 0,
            behavior:"smooth"
        })
    }
    const onClickAboutMe = () => {
        window.scroll({
            top: 890,
            behavior:"smooth"
        })
    }
    const onClickSkills = () => {
        window.scroll({
            top: 1280,
            behavior:"smooth"
        })
    }
    const onClickProjects = () => {
        window.scroll({
            top: 2690,
            behavior:"smooth"
        })
    }


  return (
    <div>
      <div>
        <header className={classes.header_header}>
            <div className={classes.header_inner}>
                <div className={classes.header_title} onClick={onClickhome}>KJS</div>
                <div className={classes.header_navigate}>
                    <div className={classes.header_navigate_menu} onClick={onClickAboutMe} >About Me</div>
                    <div className={classes.header_navigate_menu} onClick={onClickSkills} >Skills</div>
                    <div className={classes.header_navigate_menu} onClick={onClickProjects} >Projects</div>
                    <div className={classes.header_navigate_menu} >Career</div>
                </div>
            </div>
        </header>
        <div className={classes.masthead_masthead}>
            <div className={classes.masthead_content}>
                <div className={classes.masthead_content_title}>
                    = Title =
                </div>
                <br/>
                <div className={classes.masthead_content_content}>
                    content : Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <hr/>
                <div style={{marginBottom:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    더 알아보기
                </div>
            </div>
        </div>
        <article className={classes.aboutme_aboutme}>
            <div className={classes.aboutme_content}>
                <div className={classes.section_title}>
                    <div className={classes.section_title_text}>ABOUT ME</div>
                </div>

                <div className={classes.aboutme_basic_infos}>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={userImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>이름</div>
                                <div className={classes.aboutme_field_value}>김정수</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={calendarImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>생년월일</div>
                                <div className={classes.aboutme_field_value}>97.12.17</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={locationImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>주소지</div>
                                <div className={classes.aboutme_field_value}>서울시 금천구</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={phoneImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>연락처</div>
                                <div className={classes.aboutme_field_value}>010-6637-8598</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={mailImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>이메일</div>
                                <div className={classes.aboutme_field_value}>wjdtn8738@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.aboutme_basic_info_wrapper}>
                        <div className={classes.aboutme_basic_info}>
                            <div className={classes.aboutme_icon_image_wrapper}>
                                <img className={classes.aboutme_icon_image} src={schoolImage} alt=""/>
                            </div>
                            <div className={classes.aboutme_field}>
                                <div className={classes.aboutme_field_label}>학력</div>
                                <div className={classes.aboutme_field_value}>서운대학교</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

          <a name={"target"}></a>
        <article className={classes.skills_skills}>
            <div className={classes.skills_content}>
                <div className={classes.section_title}>
                    <div className={classes.section_title_text}>SKILLS</div>
                </div>
                <div className={classes.skills_stacks_container}>
                    <div className={classes.skills_stacks_area}>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                    </div>

                    <div className={classes.skills_stacks_area}>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                        <div className={classes.skills_stacks}>
                            <div className={classes.skills_stack_title}>종류</div>
                            <img className={classes.skills_stack_image} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=a340" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article style={{width:"100%", backgroundColor:"yellow"}}>
            <div>
                <div className={classes.section_title}>
                    <div className={classes.section_title_text}>Projects</div>
                </div>
                <div className={classes.projects_container}>
                    <div className={classes.projects_stacks}>
                        <div className={classes.projects_stacks_image}>
                            <h3>프로젝트 이름</h3>
                        </div>
                        <div style={{width:"500px"}} className={classes.projects_stacks_image}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={classes.projects_stacks_text}>
                            프로젝트 내용 및 느낀점
                        </div>
                    </div>
                </div>
                <div className={classes.projects_container}>
                    <div className={classes.projects_stacks}>
                        <div className={classes.projects_stacks_image}>
                            <h3>프로젝트 이름</h3>
                        </div>
                        <div style={{width:"500px"}} className={classes.projects_stacks_image}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={classes.projects_stacks_text}>
                            프로젝트 내용 및 느낀점
                        </div>
                    </div>
                </div>
                <div className={classes.projects_container}>
                    <div className={classes.projects_stacks}>
                        <div className={classes.projects_stacks_image}>
                            <h3>프로젝트 이름</h3>
                        </div>
                        <div style={{width:"500px"}} className={classes.projects_stacks_image}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={classes.projects_stacks_text}>
                            프로젝트 내용 및 느낀점
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article style={{width:"100%", backgroundColor:"blue"}}>
            <div>
                <div className={classes.section_title}>
                    <div className={classes.section_title_text}>Career</div>
                </div>
                <div>
                    <div>
                        회사 경력 및 이력
                        <img src="https://images.unsplash.com/photo-1681319359648-595d9cbf3c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzYwMDYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </div>
                </div>
            </div>
        </article>
      </div>
    </div>
  );
}

export default App;
