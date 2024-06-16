import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto, SignInDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    await this.userService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    const token = await this.userService.signIn(signInDto);

    if (!token) {
      throw new BadRequestException('Invalid credentials');
    }

    return token;
  }
}
