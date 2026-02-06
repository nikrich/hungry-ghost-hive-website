import packageJson from '../package.json';

describe('Package Configuration Tests', () => {
  describe('eslint-config-next version', () => {
    it('should have eslint-config-next in dependencies', () => {
      expect(packageJson.dependencies['eslint-config-next']).toBeDefined();
    });

    it('should use caret (^) version for eslint-config-next to allow updates', () => {
      const eslintConfigVersion = packageJson.dependencies['eslint-config-next'];
      expect(eslintConfigVersion).toMatch(/^\^/);
    });

    it('should be compatible with Next.js 16.x', () => {
      const eslintConfigVersion = packageJson.dependencies['eslint-config-next'];
      const nextVersion = packageJson.dependencies.next;

      // Extract major versions
      const eslintMajor = eslintConfigVersion.replace(/^\^/, '').split('.')[0];
      const nextMajor = nextVersion.split('.')[0];

      expect(eslintMajor).toBe(nextMajor);
      expect(eslintMajor).toBe('16');
    });
  });

  describe('Dependency version patterns', () => {
    it('should use consistent version patterns for most dependencies', () => {
      const deps = packageJson.dependencies;
      const caretDeps = Object.entries(deps).filter(
        ([_, version]) => typeof version === 'string' && version.startsWith('^')
      );

      // Most dependencies should use caret notation for flexibility
      expect(caretDeps.length).toBeGreaterThan(5);
    });

    it('should have Next.js pinned to exact version', () => {
      const nextVersion = packageJson.dependencies.next;
      expect(nextVersion).not.toMatch(/^\^|^\~/);
      expect(nextVersion).toMatch(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('Node engine requirements', () => {
    it('should require Node.js 20 or higher', () => {
      expect(packageJson.engines.node).toBe('>=20');
    });
  });
});
