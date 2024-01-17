import { plainToClass } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

class EnvironmentVariableDto {
  @IsString()
  RABBIT_URL: string;
}

export const EnvironmentVariables = {
  RABBIT_URL: 'RABBIT_URL',
};

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariableDto, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
